<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mcustomer extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'customer_nama' => $this->input->post('customer_nama'),
                        'customer_alamat' => $this->input->post('customer_alamat'),
                        'customer_telp' => $this->input->post('customer_telp'),
                        'customer_cp' => $this->input->post('customer_cp'),
                        'customer_email' => $this->input->post('customer_email')
                );
                $this->db->where('customer_id', $this->input->post('customer_id'));
                
                if ( ! $this->db->delete('m_customer', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('customer_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
