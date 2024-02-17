# Database Design for Construction Material Management

## Tables

1. **Customers**

   - Primary Key: customer_id
   - Foreign Key: None
   - Fields:
     - customer_name (varchar)
     - customer_email (varchar)
     - customer_phone (varchar)

2. **Orders**

   - Primary Key: order_id
   - Foreign Key: customer_id (References Customers.customer_id)
   - Fields:
     - order_date (date)
     - order_total (decimal)

3. **Products**

   - Primary Key: product_id
   - Foreign Key: None
   - Fields:
     - product_name (varchar)
     - product_price (decimal)
     - product_quantity (int)

4. **Suppliers**

   - Primary Key: supplier_id
   - Foreign Key: None
   - Fields:
     - supplier_name (varchar)
     - supplier_address (varchar)
     - supplier_phone (varchar)

5. **Inventory**

   - Primary Key: inventory_id
   - Foreign Key: product_id (References Products.product_id), supplier_id (References Suppliers.supplier_id)
   - Fields:
     - inventory_quantity (int)
     - inventory_location (varchar)

6. **Order_Items**

   - Primary Key: order_item_id
   - Foreign Key: order_id (References Orders.order_id), product_id (References Products.product_id)
   - Fields:
     - item_quantity (int)
     - item_price (decimal)

7. **Transactions**

   - Primary Key: transaction_id
   - Foreign Key: order_id (References Orders.order_id)
   - Fields:
     - transaction_date (datetime)
     - transaction_amount (decimal)

8. **Payments**

   - Primary Key: payment_id
   - Foreign Key: customer_id (References Customers.customer_id), transaction_id (References Transactions.transaction_id)
   - Fields:
     - payment_date (date)
     - payment_amount (decimal)

9. **Employees**

   - Primary Key: employee_id
   - Foreign Key: None
   - Fields:
     - employee_name (varchar)
     - employee_email (varchar)
     - employee_phone (varchar)

10. **Employee_Roles**
    - Primary Key: role_id
    - Foreign Key: employee_id (References Employees.employee_id)
    - Fields:
      - role_name (varchar)
      - role_description (varchar)
