from django.db import models
from django.contrib.auth.models import User


class Tool(models.Model):
    name = models.CharField(max_length=50, unique=True)
    amount = models.IntegerField()
    # TODO: add more fields later

    class Meta:
        ordering = ['name']

    def __str__(self):
        return '{0}: {1}'.format(self.name, self.amount)


class Rental(models.Model):
    since = models.DateTimeField(auto_now_add=True)
    until = models.DateTimeField()
    user = models.ForeignKey(User, related_name='rentals', on_delete=models.CASCADE)
    tool = models.ForeignKey(Tool, related_name='tools', on_delete=models.CASCADE)


