<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mwarnaglasin extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'warnaglasin_nama' => $this->input->post('warnaglasin_nama'),
                        'warnaglasin_desc' => $this->input->post('warnaglasin_desc')
                );
                $this->db->where('warnaglasin_id', $this->input->post('warnaglasin_id'));
                
                if ( ! $this->db->delete('m_warnaglasin', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('warnaglasin_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
