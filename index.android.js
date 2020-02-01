"use strict";

import { NativeModules, processColor } from "react-native";

var CalendarEvents = NativeModules.CalendarEvents;

export default {
  async calendarAuthorizationStatus() {
    return CalendarEvents.getCalendarPermissions();
  },

  reminderAuthorizationStatus() {
    throw new Error(
      "Use calendarAuthorizationStatus instead. This is for IOS only"
    );
  },

  async authorizeCalendar() {
    return CalendarEvents.requestCalendarPermissions();
  },

  authorizeReminder() {
    throw new Error("Use authorizeCalendar instead. This is for IOS only");
  },

  async fetchAllEvents(startDate, endDate, calendars = []) {
    return CalendarEvents.findAllEvents(startDate, endDate, calendars);
  },

  async findCalendars(type = "calendar") {
    return CalendarEvents.findCalendars();
  },

  async saveCalendar(options = {}) {
    return CalendarEvents.saveCalendar({
      ...options,
      color: options.color ? processColor(options.color) : undefined
    });
  },

  async findEventById(id) {
    return CalendarEvents.findById(id);
  },

  async saveReminder(title, details, options = { sync: false }) {
    throw new Error("Use saveEvent instead. This is for IOS only");
  },

  async saveEvent(title, details, options = { sync: false }) {
    return CalendarEvents.saveEvent(title, details, options);
  },

  async removeEvent(id, options = { sync: false }) {
    return CalendarEvents.removeEvent(id, options);
  },

  async uriForCalendar() {
    return CalendarEvents.uriForCalendar();
  },

  openEventInCalendar(eventID) {
    CalendarEvents.openEventInCalendar(eventID);
  }
};
