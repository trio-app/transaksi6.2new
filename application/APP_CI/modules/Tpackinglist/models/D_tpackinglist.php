<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_tpackinglist extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'unit_nama' => $this->input->post('unit_nama'),
                        'unit_desc' => $this->input->post('unit_desc')
                );
                $this->db->where('unit_id', $this->input->post('unit_id'));
                
                if ( ! $this->db->delete('m_unit', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('unit_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
