describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on food correctly', function () {
       var list = [{
           name: 'Karuna',
           favoriteFood: 'Butter Chicken'
       }, {
           name: 'Beenu',
           favoriteFood: 'Croissant'
       }, {
           name: 'Naren',
           favoriteFood: 'Amritsari Kulcha'
       }];

			 var results = $filter('favoriteFood')(list, 'Croissant');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Beenu');
    });
});
