
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1679BFD8-34CE-403D-9F58-02E6AE3964D9"}
 */
function autoo(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"54BD5D76-BB1D-46DB-876A-5DDB770BCF08"}
 */
function SAve(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	databaseManager.setAutoSave(true);
	history.back();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6B153535-37DA-4677-9A22-C13005F2AB89"}
 */
function back(event) {
	// TODO Auto-generated method stub
	history.back();

}
