---
title: "dbt Fundamentals: Transforming Data the Right Way"
description: "An introduction to dbt (data build tool) and how it brings software engineering best practices like version control, testing, and documentation to SQL transformations."
pubDate: 2025-02-20
category: "data-engineering"
draft: false
---

# dbt Fundamentals: Transforming Data the Right Way

If you work with a data warehouse and write SQL transformations, dbt is the tool that finally makes that work feel like proper software engineering.

## What is dbt?

dbt (data build tool) lets you write modular SQL `SELECT` statements, and it handles the `CREATE TABLE AS` / `INSERT INTO` boilerplate. It also brings:

- **Tests** — assert row counts, uniqueness, not-null constraints
- **Documentation** — auto-generate a data catalog from your model descriptions
- **Lineage** — visualise dependencies between models

## A Basic Model

```sql
-- models/mart/fct_orders.sql
with orders as (
    select * from {{ ref('stg_orders') }}
),
customers as (
    select * from {{ ref('stg_customers') }}
)

select
    o.order_id,
    o.order_date,
    c.customer_name,
    o.total_amount
from orders o
left join customers c on o.customer_id = c.customer_id
```

## Running It

```bash
dbt run --select fct_orders
dbt test --select fct_orders
```

## Why It Matters

Before dbt, SQL transformations were scattered scripts with no tests and no docs. dbt fixes that. If your team isn't using it yet, start with one model and go from there.
