http://stackoverflow.com/questions/17874181/format-date-in-meteor-handlebars-bracers-timestamp

Use a handlebars helper:

Template.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
});
Then in your html:

{{prettifyDate timestamp}}
If you use moment:

Template.registerHelper("prettifyDate", function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
});

