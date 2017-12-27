<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mitem extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'item_kode' => $this->input->post('item_kode'),
                        'item_nama' => $this->input->post('item_nama'),
                        'item_category' => $this->input->post('item_category'),
                        'item_unit' => $this->input->post('item_unit'),
                        'item_harga' => $this->input->post('item_harga'),
                        'item_upp' => $this->input->post('item_upp'),
                        'item_weight' => $this->input->post('item_weight')
                );
                $this->db->where('item_id', $this->input->post('item_id'));
                
                if ( ! $this->db->delete('m_item', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('item_kode'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
