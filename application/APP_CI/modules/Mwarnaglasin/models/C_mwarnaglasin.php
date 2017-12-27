<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mwarnaglasin extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'warnaglasin_nama' => $this->input->post('warnaglasin_nama'),
                        'warnaglasin_desc' => $this->input->post('warnaglasin_desc')
                );

                if ( ! $this->db->insert('m_warnaglasin', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('warnaglasin_nama') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
