import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router';

const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`http://localhost:3000/product`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        alert('Delete successful');
        fetchData(); // Refresh the data after deletion
      });
  };

  return (
    <div>
      <h1 style={styles.header}>Our Products</h1>
      <div style={styles.productGrid}>
        {data.map((product) => (
          <div
            key={product.id}
            style={styles.productCard}
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={(e) => handleMouseOut(e)}
          >
            <Link to={`/description/${product.id}`} style={styles.link}>
              <div style={styles.productId}>{product.id}</div>
              <img src={product.image} alt="" style={styles.image} />
              <h2 style={styles.productTitle}>{product.title}</h2>
              <h4 style={styles.productDescription}>{product.description}</h4>
              <h5 style={styles.productCategory}>{product.category}</h5>
            </Link>
            <h2 style={styles.productPrice}>${product.price}</h2>
            <div style={styles.buttonContainer}>
              <button onClick={() => handleDelete(product.id)} style={styles.deleteButton}>
                Delete
              </button>
              <Link to={`/edit/${product.id}`}>
                <button style={styles.updateButton}>Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mouse hover handlers for dynamic styles
const handleMouseOver = (e) => {
  e.currentTarget.style.transform = 'scale(1.05)';
  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
};

const handleMouseOut = (e) => {
  e.currentTarget.style.transform = 'scale(1)';
  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
};

const styles = {
  header: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: '20px 0',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(172, 50, 50, 0.1)',
    padding: '16px',
    backgroundColor: '#fff',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  productId: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#555',
  },
  image: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
    marginBottom: '12px',
    borderRadius: '8px',
  },
  productTitle: {
    fontSize: '20px',
    margin: '8px 0',
    color: '#333',
  },
  productDescription: {
    fontSize: '16px',
    margin: '4px 0',
    color: '#777',
  },
  productCategory: {
    fontSize: '14px',
    margin: '4px 0',
    color: '#999',
  },
  productPrice: {
    fontSize: '20px',
    margin: '12px 0',
    color: '#000',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  updateButton: {
    padding: '10px 20px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Product;
