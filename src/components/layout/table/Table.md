Table example, with ordering and actions

```js padded

    const data = [
        {
            name: "Jose",
            age: "25"
        },
        {
            name: "Marcos",
            age: "14"
        },
        {
            name: "Luis",
            age: "83"
        },
    ];

    const columns = [
        {
            name: "name",
            label: "Name",
            options: {

            }
        }, {
            name: "age",
            label: "Age"
        }
    ];

        <Table
            title="My Teams"
            data={data}
            columns={columns}
        />
```