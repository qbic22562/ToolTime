from django.db import models
from django.contrib.auth.models import User
from .exceptions import NotEnoughTools


class Tool(models.Model):
    name = models.CharField(max_length=50, unique=True)
    amount = models.IntegerField()
    # TODO: add more fields later

    class Meta:
        ordering = ['name']

    def __str__(self):
        return '{0}: {1}'.format(self.name, self.amount)

    def decrement_amount(self):
        if(self.amount > 0):
            self.amount -= 1
        else:
            raise NotEnoughTools

    def increment_amount(self):
        self.amount += 1



class Rental(models.Model):
    since = models.DateTimeField()
    until = models.DateTimeField()
    user = models.ForeignKey(User, related_name='rentals', on_delete=models.CASCADE)
    tool = models.ForeignKey(Tool, related_name='tools', on_delete=models.CASCADE)


