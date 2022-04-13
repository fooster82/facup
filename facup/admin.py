from django.contrib import admin

from .models import Team, Stat, User

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'ground', 'latitude', 'longitude')

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password', 'role')

class StatAdmin(admin.ModelAdmin):
    list_display = ('username', 'year')

admin.site.register(Stat, StatAdmin)
admin.site.register(Team, TeamAdmin)
admin.site.register(User, UserAdmin)