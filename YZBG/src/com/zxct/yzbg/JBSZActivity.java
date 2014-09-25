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
		//getString()第二个参数为缺省值，如果preference中不存在该key，将返回缺省值
		String zt = sharedPreferences.getString("switchTest", "");

		Toast.makeText(JBSZActivity.this, zt + "``",  
                Toast.LENGTH_SHORT).show();  
		
		Editor editor = sharedPreferences.edit();
		if(zt =="" || zt =="true"){//等于空，说明是第一次使用
			switchTest.setChecked(true);
			editor.putString("switchTest", "true");
		}else{
			switchTest.setChecked(false);
			editor.putString("switchTest", "false");
		}
		

        
        
        //保存数据
        editor.commit();

		
		
		
		Toast.makeText(JBSZActivity.this, switchTest.getTextOn() + "``",  
                Toast.LENGTH_SHORT).show();  
		
		
		
		
		
		
		switchTest.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {  
            @Override  
            public void onCheckedChanged(CompoundButton buttonView,  
                    boolean isChecked) {  
                Toast.makeText(JBSZActivity.this, isChecked + "",  
                        Toast.LENGTH_SHORT).show();  
                
                
              //创建异或获取一个已经存在的sharedPreferences对象（单例的）
                SharedPreferences sharedPreferences = getSharedPreferences("jbsz_gzzt", Context.MODE_PRIVATE);
                //创建数据编辑器
                Editor editor = sharedPreferences.edit();
                //传递需要保存的数据
                if(isChecked){
                	editor.putString("switchTest", "true");
                }else{
                	editor.putString("switchTest", "false");
                }
                
                
                //保存数据
                editor.commit();
            }  
        });  
	
		
		
		
		
		
		
		
		
	
	
	}
}
