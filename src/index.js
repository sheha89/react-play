import React  from 'react'
import ReactDOM from 'react-dom'


var ProductRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.code}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.unit}</td>
                <td>{this.props.product.revenue.amount}</td>
                <td>{this.props.product.revenue.tot}</td>
            </tr>
        );
    }
});


var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        console.log(this.props.products.length);
        this.props.products.forEach(function (product) {
            rows.push(<ProductRow product={product} key={product.code}/>);
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>ITEM</th>
                    <th>CODE</th>
                    <th>PRICE</th>
                    <th>UNITS</th>
                    <th>REVENUE</th>
                    <th>%TOT</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});


var FilterableProductTable = React.createClass({
    render: function () {
        return (
            <div>
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
});


var PRODUCTS = [
    {
        "code": "123456",
        "name": "Fish Sandwitch",
        "price": 5.55,
        "unit": 123,
        "revenue": {
            "amount": 682.65,
            "tot": 6.5,
            "growth": 0
        },
        "links": [
            {
                "rel": "self",
                "href": "https://api.apptizer.io/reports/productdetails/123456",
                "method": "GET"
            }
        ]
    },
    {
        "code": "123457",
        "name": "Chichen Sandwitch",
        "price": 4.55,
        "unit": 100,
        "revenue": {
            "amount": 655.00,
            "tot": 4.5,
            "growth": 0
        },
        "links": [
            {
                "rel": "self",
                "href": "https://api.apptizer.io/reports/productdetails/123457",
                "method": "GET"
            }
        ]
    },
    {
        "code": "123458",
        "name": "Soup & Sandwitch",
        "price": 8.55,
        "unit": 50,
        "revenue": {
            "amount": 427.50,
            "tot": 3.5,
            "growth": 0
        },
        "links": [
            {
                "rel": "self",
                "href": "https://api.apptizer.io/reports/productdetails/123458",
                "method": "GET"
            }
        ]
    },
    {
        "code": "123459",
        "name": "Fish Sandwitch",
        "price": 4.55,
        "unit": 25,
        "revenue": {
            "amount": 113.75,
            "tot": 3.0,
            "growth": 0
        },
        "links": [
            {
                "rel": "self",
                "href": "https://api.apptizer.io/reports/productdetails/123456",
                "method": "GET"
            }
        ]
    }
];


ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('root')
);
