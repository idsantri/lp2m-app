import { Ref } from 'vue';

/**
 * Converts Vue ref data to FormData, combining with existing form element data
 * @param eTarget - The form element from submit event
 * @param refInput - Vue ref object containing form data
 * @returns FormData object with combined data
 */
function refToFormData<T extends Record<string, unknown>>(
	eTarget: HTMLFormElement,
	refInput: Ref<T>,
): FormData {
	const form = new FormData(eTarget);

	Object.keys(refInput.value).forEach((key) => {
		const value = refInput.value[key];

		if (value != null) {
			// Handle different types of values appropriately
			if (value instanceof File) {
				// handle files
				form.append(key, value);
			} else if (typeof value === 'object' && !(value instanceof Date)) {
				// Convert objects to JSON strings
				form.append(key, JSON.stringify(value));
			} else if (value instanceof Date) {
				// Convert dates to ISO strings

				// TODO: Perlu perbaikan
				const date = new Date(value);
				form.append(key, date.toISOString());
			} else {
				// Convert primitive values to strings
				form.append(key, String(value));
			}
		}
	});

	// debugging
	// console.log([...form]);
	return form;
}

export { refToFormData };
