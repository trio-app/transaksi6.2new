<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_tpackinglist extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'unit_nama' => $this->input->post('unit_nama'),
                        'unit_desc' => $this->input->post('unit_desc')
                );

                if ( ! $this->db->insert('m_unit', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('unit_nama') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
