from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/orders')
def get_orders():
    orders = [
        {"id": 1, "product": "Rice 25kg", "supplier": "Araliya Foods", "quantity": 100, "status": "Delivered", "date": "2025-06-01"},
        {"id": 2, "product": "Sugar 50kg", "supplier": "Pelwatte Sugar", "quantity": 50, "status": "Pending", "date": "2025-06-05"},
        {"id": 3, "product": "Flour 25kg", "supplier": "Prima Ceylon", "quantity": 75, "status": "Processing", "date": "2025-06-10"},
        {"id": 4, "product": "Coconut Oil 5L", "supplier": "Kurundu Oils", "quantity": 200, "status": "Delivered", "date": "2025-06-12"},
        {"id": 5, "product": "Milk Powder 1kg", "supplier": "Anchor Lanka", "quantity": 30, "status": "Pending", "date": "2025-06-15"},
    ]
    return jsonify(orders)

@app.route('/api/inventory')
def get_inventory():
    inventory = [
        {"id": 1, "product": "Rice 25kg", "stock": 450, "min_stock": 100, "status": "OK"},
        {"id": 2, "product": "Sugar 50kg", "stock": 80, "min_stock": 100, "status": "Low"},
        {"id": 3, "product": "Flour 25kg", "stock": 200, "min_stock": 50, "status": "OK"},
        {"id": 4, "product": "Coconut Oil 5L", "stock": 30, "min_stock": 50, "status": "Low"},
        {"id": 5, "product": "Milk Powder 1kg", "stock": 150, "min_stock": 40, "status": "OK"},
    ]
    return jsonify(inventory)

@app.route('/api/stats')
def get_stats():
    return jsonify({
        "total_orders": 5,
        "total_revenue": 485000,
        "pending_orders": 2,
        "low_stock_items": 2
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)