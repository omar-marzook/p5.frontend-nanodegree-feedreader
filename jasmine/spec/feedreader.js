/* feedreader.js */

$(function() {

    describe('RSS Feeds', function() {

        it('all Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('all Feeds URLs are defined', function() {
            for(var i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('all Feeds names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });


    describe('The menu', function() {

        it('The menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('The menu is toggle visibility on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('at least one feed loaded ', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
        
    });

    describe('New Feed Selection', function() {

        var oldFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();

                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('new feed content has changed', function(done) {
            expect(newFeed).not.toBe(oldFeed);
            done();
        });

    });

}());
