<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mcategory extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'category_nama' => $this->input->post('category_nama'),
                        'category_desc' => $this->input->post('category_desc')
                );
                $this->db->where('category_id', $this->input->post('category_id'));
                
                if ( ! $this->db->delete('m_category', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('category_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
