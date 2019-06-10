context("Login Spec", () => {
	it('should show me login page', () => {
		cy.visit('http://localhost:8080/login');
		cy.contains('Please sign in');
	});
});
