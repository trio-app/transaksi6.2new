<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class D_mbahan extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'bahan_nama' => $this->input->post('bahan_nama'),
                        'bahan_jenis' => $this->input->post('bahan_jenis'),
                        'bahan_merk' => $this->input->post('bahan_merk'),
                        'bahan_gap' => $this->input->post('bahan_gap'),
                        'bahan_bentuk' => $this->input->post('bahan_bentuk'),
                        'bahan_glasin' => $this->input->post('bahan_glasin'),
                        'bahan_ukuranP' => $this->input->post('bahan_ukuranP'),
                        'bahan_ukuranL' => $this->input->post('bahan_ukuranL'),
                        'bahan_porporasi' => $this->input->post('bahan_porporasi'),
                        'bahan_mataperbaris' => $this->input->post('bahan_mataperbaris'),
                        'bahan_matapisau' => $this->input->post('bahan_matapisau'),
                        'bahan_warnacetakan' => $this->input->post('bahan_warnacetakan'),
                        'bahan_qtyname' => $this->input->post('bahan_qtyname'),
                        'bahan_totalname' => $this->input->post('bahan_totalname'),
                        'bahan_core' => $this->input->post('bahan_core'),
                        'bahan_arahgulungan' => $this->input->post('bahan_arahgulungan'),
                        'bahan_sensor' => $this->input->post('bahan_sensor')
                );
                $this->db->where('bahan_id', $this->input->post('bahan_id'));
                
                if ( ! $this->db->delete('m_bahan', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('bahan_nama'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
