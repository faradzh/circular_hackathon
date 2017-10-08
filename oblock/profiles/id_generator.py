import random


def generate_id(length, target_class):
    generated_id = random.randint(0, length)
    try:
        target_class.objects.get(id=generated_id)
        generate_id(length, target_class)
    except target_class.DoesNotExist:
        return generated_id
