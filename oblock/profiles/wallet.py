import uuid

class Wallet:

    # Dictionary that contains all the addresses as keys (string) and balances as values (double)
    addresses = {}

    # Loads addresses from the database.
    def load_addresses(self):
        print ("Init")

    # Generates random unique address, adds it to the addresses dictionary
    # and sets the balance to 0.
    def new_user(self):
        id = uuid.uuid4()
        self.addresses[id] = 0
        return id

    # Transfers coins from address1 to address2.
    def make_transaction(self, address1, address2, amount):
        if not self.addresses.has_key(address1) or not self.addresses.has_key(address2):
            print ("Error, no such address")
        elif self.addresses[address1] < amount:
            print ("Error, not enough coins")
        else:
            self.addresses[address1] -= amount
            self.addresses[address2] += amount

    # Returns balance associated with the address, -1 if no
    # such address exists.
    def get_balance(self, addess):
        if (self.addresses.has_key(addess)):
            print (self.addresses[addess])
            return self.addresses[addess]
        else:
            print ("Error, no such address")
            return -1



