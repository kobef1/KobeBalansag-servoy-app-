/**
 * @properties={typeid:24,uuid:"D4DBC8B7-2B1D-4A7C-B544-AE68F136CB3A"}
 * @SuppressWarnings(unused)
 */
function initNav(){
	
	var items= [
		{
				id:'home',
				text:'Home',
				iconStyleClass:'fa fa-home svy-sidenav-font-icon',
				data: {formName:'Prods'},
				color: 'red'
		},
		{divider:true, styleClass:'svy-sidenav-divider'}
	]
		
	
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"42D35E11-CCC5-448E-8339-FFA45B4512DC"}
 * @SuppressWarnings(wrongparameters)
 */



/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"61BC8B69-315B-4F41-8C97-A4BEBDAF1695"}
 */
var prodprice;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3CF4DE6B-A7BA-4D43-951C-DBEFA5A2386F"}
 */
var prodquantity;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34292D7F-9944-4FD5-BB51-3310E4196E23"}
 */
var name; 


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"40B812EC-207B-41F0-9124-389B3CC8BDDA"}
 */
function submit(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();

	foundset.product_price = prodprice;
	foundset.product_quantity = prodquantity;
	foundset.product_name = name;

		databaseManager.saveData();
		
		application.output("saved successfully");
	
	
	
	        
	
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"35E19DF0-2419-4DF6-9FB5-35BEA1B0A406"}
 */
/**function add() {
	// TODO Autos-generated method stub
	
	var name = document.getElementID('textbox_2').value;
	foundset.product_name = name;

}*/

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}sads
 *
 * @properties={typeid:24,uuid:"D89E2BF4-DE17-4AA8-BC8C-363A79CA529F"}
 */


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0F21D7B-94EB-43C7-BB33-8306175F6C8C"}
 */


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B935042-CF09-496D-88D7-493E8ABED946"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub
	//foundset.newRecord();
//	databaseManager.setAutoSave(false);

	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B842FCF6-03EB-46D1-B3A9-1CD7F53371FC"}
 */
function showform(event) {
	// TODO Auto-generated method stub
	forms.addproducts.controller.show();
	
	
	 foundset.newRecord(); // adds as first record
	// foundset.newRecord(2); //adds as second record
	
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"67AF642C-C466-4DC1-842E-37FD01A2509D"}
 */
function showproducts(event) {
	// TODO Auto-generated method stub
	forms.products.controller.show();
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5A0F9FDD-7A8F-49AB-828B-9362EB2D4BEB"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	forms.Prods.controller.show();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3093B69F-C376-4466-B812-62A31584B2DE"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	

	
	
}

/**
 * @param {object} menuItemId
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"78CB2364-4C59-401D-811B-036722F0939F"}
 */
function onMenuItemExpanded(menuItemId, event) {
	// TODO Auto-generated method stub
	function loadMenuItems() {

		/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
		var menuItem;
		var menuItems = [];
	

		// HOME
		menuItem = new Object();
		menuItem.id = "homeDashboard";
		menuItem.text = "DASHBOARD"
		menuItem.iconStyleClass = "fa fa-th-large";
		menuItems.push(menuItem);

		// CUSTOMERS
		menuItem = new Object();
		menuItem.id = "customersTableView";
		menuItem.text = "CUSTOMERS"
		menuItem.iconStyleClass = "icon-contacts";
		menuItems.push(menuItem);

		// ORDERS
		
		return menuItems;
	}

}
