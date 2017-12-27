<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mmerk extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'merk_nama' => $this->input->post('merk_nama'),
                        'merk_desc' => $this->input->post('merk_desc')
                );
                $this->db->where('merk_id', $this->input->post('merk_id'));
                
                if ( ! $this->db->delete('m_merk', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('merk_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
