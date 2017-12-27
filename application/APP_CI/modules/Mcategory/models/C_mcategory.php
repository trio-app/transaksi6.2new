<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mcategory extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'category_nama' => $this->input->post('category_nama'),
                        'category_desc' => $this->input->post('category_desc')
                );

                if ( ! $this->db->insert('m_category', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('category_nama') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
