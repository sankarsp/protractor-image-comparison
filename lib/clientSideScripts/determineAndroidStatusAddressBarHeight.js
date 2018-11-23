/**
 * Get the current height of the Android status and address bar
 *
 * @param {object} androidOffsets The Android offsets, see the constants
 *
 * @returns {number}
 */
export default function determineAndroidStatusAddressBarHeight(androidOffsets) {
	// Determine version for the right offsets
	const match = (navigator.appVersion).match(/Android (\d+).(\d+).?(\d+)?/);
	const majorVersion = parseInt(match[ 1 ], 10);
	const versionOffsets = androidOffsets[ majorVersion ];

	// Determine status and address bar height
	return versionOffsets.STATUS_BAR + versionOffsets.ADDRESS_BAR;
}