const express = require('express');
const router = express.Router();
router.use(express.json());

const mysqlConnection  = require('../database.js');
 

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM costumer', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
   

  router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM costumer WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM costumer WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Cliente Eliminado !!'});
      } else {
        console.log(err);
      }
    });
  });
   

  router.post('/', (req, res) => {
    const {id, name, lastname,country,email} = req.body;  

    const query = `CALL costumersCrud (?,?,?,?,?)`;
    mysqlConnection.query(query, [id, name, lastname,country,email], (err, rows, fields) => {
      if(!err) {
        res.json({Status: 'Cliente Guardado Correctamente !! '});
      } else {
        console.log(err);
      }
    });
  
  });
  
  router.put('/:id', (req, res) => {
    const {name, lastname,country,email} = req.body;
    const { id } = req.params;
    const query = `CALL costumersCrud(?,?,?,?,?)`;
    mysqlConnection.query(query, [id,name, lastname,country,email], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Cliente Actualizado Correctamente !!!'});
      } else {
        console.log(err);
      }
    });
    
  });

module.exports = router;