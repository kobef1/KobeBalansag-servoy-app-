
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"B3420AAB-46FC-4D6E-9DA7-3A10321CF727"}
 */
function edit(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	forms.edit.controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1C1A049A-B617-4106-B1E7-59E6DC2F3D0B"}
 */
function DEL(event) {
	// TODO Auto-generated method stub
	
		
		
 foundset.deleteRecord();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2BF99044-6407-490B-AE04-B3F00CE78482"}
 */
function Goedit(event) {
	// TODO Auto-generated method stub
	forms.edit.controller.show();
}
