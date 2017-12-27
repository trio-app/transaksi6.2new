<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mjbahan extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'jbahan_nama' => $this->input->post('jbahan_nama'),
                        'jbahan_desc' => $this->input->post('jbahan_desc'),
                );
                $this->db->where('jbahan_id', $this->input->post('jbahan_id'));
                
                if ( ! $this->db->delete('m_jbahan', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('jbahan_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
