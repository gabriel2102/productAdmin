import React, { useState, useEffect } from 'react';
import{ Button, Form, Input, InputNumber } from 'antd';
import { createNewProduct} from '../actions/apiProduct'


const CreateProductoForm = () => {

    const [product, setProduct] = useState();

    const createProduct = (values) => {
        setProduct(values)
        //console.log(product);
    }

    useEffect(() => {
      createNewProduct('http://localhost:8000/api/product/new', product);
    }, [product])
    
    const validateMessages = {
        required: '${label} este campo es requerido',
        types: {
            email: '${label} no es un email válido',
            number: '${label} no es número'
        } 
    }
  return (
    <div>
        <Form
            onFinish={createProduct}
            layout='vertical'
            validateMessages={validateMessages}
        >
            <Form.Item name='title' label='Nombre Producto' rules={[{required: true, message: 'El nombre de producto es requerido'}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='price' label='Precio' rules={[{required: true, message: 'El precio es requerido'}]}>
                <InputNumber controls={false} min={0}/>
            </Form.Item>
            <Form.Item name='description' label='Descripción'>
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Crear producto</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateProductoForm