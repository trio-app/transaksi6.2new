<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_mmerk extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'merk_nama' => $this->input->post('merk_nama'),
                        'merk_desc' => $this->input->post('merk_desc')
                );

                if ( ! $this->db->insert('m_merk', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('merk_nama') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
