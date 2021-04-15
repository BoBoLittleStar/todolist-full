export type TypeItem = {
	task: string,
	checked: boolean,
}

export type TypeState =
	{
		status: string,
		ids: string[],
		count: number,
		items: {
			[id: string]: TypeItem,
		},
	}

export const initialState: TypeState = {
	status: "pending",
	ids: [],
	count: 0,
	items: {},
};