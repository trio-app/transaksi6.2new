<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mjbahan extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'jbahan_nama' => $this->input->post('jbahan_nama'),
                        'jbahan_desc' => $this->input->post('jbahan_desc'),
                        
                );

                if ( ! $this->db->insert('m_jbahan', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('jbahan_nama') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
