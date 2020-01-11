import logging
from apscheduler.schedulers.background import BackgroundScheduler
from django.conf import settings


scheduler = BackgroundScheduler(settings.SCHEDULER_CONFIG)

def start_scheduler():
    if settings.DEBUG:
        logging.basicConfig()
        logging.getLogger('apscheduler').setLevel(logging.DEBUG)

    scheduler.start()


