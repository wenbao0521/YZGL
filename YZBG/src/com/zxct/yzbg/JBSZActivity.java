package com.zxct.yzbg;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.Switch;
import android.widget.Toast;

public class JBSZActivity extends Activity {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	
		setContentView(R.layout.jbsz); 
		Switch switchTest = (Switch) findViewById(R.id.switch1);  
		
		
		SharedPreferences sharedPreferences = getSharedPreferences("jbsz_gzzt", Context.MODE_PRIVATE);
		//getString()�ڶ�������Ϊȱʡֵ�����preference�в����ڸ�key��������ȱʡֵ
		String zt = sharedPreferences.getString("switchTest", "");

		Toast.makeText(JBSZActivity.this, zt + "``",  
                Toast.LENGTH_SHORT).show();  
		
		Editor editor = sharedPreferences.edit();
		if(zt =="" || zt =="true"){//���ڿգ�˵���ǵ�һ��ʹ��
			switchTest.setChecked(true);
			editor.putString("switchTest", "true");
		}else{
			switchTest.setChecked(false);
			editor.putString("switchTest", "false");
		}
		

        
        
        //��������
        editor.commit();

		
		
		
		Toast.makeText(JBSZActivity.this, switchTest.getTextOn() + "``",  
                Toast.LENGTH_SHORT).show();  
		
		
		
		
		
		
		switchTest.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {  
            @Override  
            public void onCheckedChanged(CompoundButton buttonView,  
                    boolean isChecked) {  
                Toast.makeText(JBSZActivity.this, isChecked + "",  
                        Toast.LENGTH_SHORT).show();  
                
                
              //��������ȡһ���Ѿ����ڵ�sharedPreferences���󣨵����ģ�
                SharedPreferences sharedPreferences = getSharedPreferences("jbsz_gzzt", Context.MODE_PRIVATE);
                //�������ݱ༭��
                Editor editor = sharedPreferences.edit();
                //������Ҫ���������
                if(isChecked){
                	editor.putString("switchTest", "true");
                }else{
                	editor.putString("switchTest", "false");
                }
                
                
                //��������
                editor.commit();
            }  
        });  
	
		
		
		
		
		
		
		
		
	
	
	}
}
