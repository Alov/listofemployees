{
	Cfg: {
		CfgId: "Static", //  Grid identification for saving configuration to cookies
		PrintLoad: "1", PrintCols: "2", PrintLocation: "3", PrintPageBreaks: "1", PrintRows: "50", // Printing options, download all rows for printing
		Paging: '2', ChildPaging: '2', // Both paging set to server
		ChildPageLength: "20", // Server paging for child pages, splits children to given number of rows and loads them separately when they become visible due scroll
		SaveSession: '1', // Stores IO Session to cookies to identify the client on server and access appropriate grid instance
		Prepared: '1', // DLL sends data prepared, so you can set this attribute to speed up loading
		ShowDeleted: '0', // This example hides deleted row instead of coloring them red
		MaxHeight: '1', // Grid maximizes height of the main tag on page
		LimitScroll: "23", MinBodyRows: "6",  // Responsive design, for small windows sets NoVScroll and NoHScroll
		Sort: 'Department', // To sort grid according to partner and Month for first time (when no configuration saved)
		MaxGroupLength: '0', // Suppresses dividing rows to more groups when grouping because it is controlled by MaxChildren of all rows
		Group: 'Department', // To group grid by partner for first time (when no configuration saved)
		GroupRestoreSort: '1', // Restores sorting state after grouping that was before grouping
		GroupSortMain: '1', // When grouping always sorts according to main column ascending
		Adding: '0', // Suppress adding new rows when grid is not grouped
		FilterEmpty: '1', // When filtering, hides group rows that have all children hidden, see the Group row have set CanFilter:'2'
		IndexEnum: '1', // All enums are set by index
		NameCol: 'Department', // Row will be identifies by Partner name in messages (e.g. in deleting rows)
		ExportFormat: 'XLS', // Predefined export format is XLS, because XLSX is not supported by the DLL
		Size: 'Low' // Smaller style size because of large grid
	},
	Actions: {
		OnUngroup: 'Grid.Adding=0;',  // Suppress adding new rows when grid is not grouped
			OnRightClickCell: 'Grid.Component.showCustomMenu(Row,Col)' // Custom event handler, shows the calling method of the framework component; Shows some custom popup menu on right click to any cell
	},
	Lang: {
		MenuExport: { ExportFormats: 'XLS,CSV' },   // Listed only XLS and CSV, because XLSX is not supported by the DLL
		Alert: { ErrAdd: 'Cannot add new partner here!' } // Changes text of adding error message
	},
	Root: { AcceptDef: '' }, // By default (when no grouping is active) rows cannot be added or moved

	Def: {

		GroupDepartment: {
			Def: 'Group',
				
				
				CanDelete: '1',
				CanDrag: '1',
				OnGroup: 'Grid.Adding=0;',
				GroupCol: 'Departments',
				GroupCols: '|FirstName, LastName, SecondName, Birthday',
			Items: [
					{ Department: '0' },
					{ Department: '1' },
					{ Department: '2' },
					{ Department: '3' }
				]
		},

    },

	LeftCols: [

		// Partner, main column for other groupings, width 130px, when grouped 200px 
		// Shows value as tooltip
		// Is in one group with Month because of spanned fixed row - cannot be moved outside the group
		{Name: 'Department', Width: '180', Type: 'Enum', Group: '1', Enum:'|HR Department|IT Department|Marketing Department|Legal Department'},

		// Month, main column for grouping by partner, width 80px, when grouped 200px

	],

	Cols: [

		// Region
		{
			Name: 'FirstName', Width: '180', Type: 'Text', Group: '1'
		},
		{
			Name: 'LastName', Width: '180', Type: 'Text', Group: '1'
		},
		{
			Name: 'SecondName', Width: '180', Type: 'Text', Group: '1'
		},
		{
			Name: 'Birthday', Width: '180', Type: 'Date', Group: '1'
		},
	],
	Header: {
		Department: 'Department', FirstName: 'FirstName', LastName: 'LastName', SecondName: 'SecondName', Birthday: 'Birthday'
	},
}