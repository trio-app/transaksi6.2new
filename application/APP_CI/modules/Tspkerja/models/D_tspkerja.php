<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_tspkerja extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'spk_doc' => $this->input->post('spk_doc')
                );
                $this->db->where('spk_id', $this->input->post('spk_id'));
                
                if ( ! $this->db->delete('tr_spk', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('spk_doc'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
