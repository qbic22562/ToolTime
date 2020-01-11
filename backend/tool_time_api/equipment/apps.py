from django.apps import AppConfig
from django.conf import settings

class EquipmentConfig(AppConfig):
    name = 'equipment'

    def ready(self):
        from . import scheduler
        if settings.SCHEDULER_AUTOSTART:
            scheduler.start_scheduler()

