Table example, with ordering and actions

```js padded
import SnackbarProvider from 'react-simple-snackbar'

    const data = [
        {
            id: 1,
            name: "Jose",
            age: "25"
        },
        {
            id: 2,
            name: "Marcos",
            age: "14"
        },
        {
            id: 3,
            name: "Luis",
            age: "83"
        },
    ];

    const columns = [
        {
            name: "id",
            options: {
                display: 'excluded',
                viewColumns: "false"
            }
        },
        {
            name: "name",
            label: "Name",
        }, {
            name: "age",
            label: "Age"
        }
    ];

    <SnackbarProvider>
        <Table
            title="My Teams"
            data={data}
            columns={columns}
        />
    </SnackbarProvider>

```