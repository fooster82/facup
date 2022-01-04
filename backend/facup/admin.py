from django.contrib import admin

from .models import Team, Stat

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'ground', 'latitude', 'longitude')

admin.site.register(Stat)
admin.site.register(Team, TeamAdmin)