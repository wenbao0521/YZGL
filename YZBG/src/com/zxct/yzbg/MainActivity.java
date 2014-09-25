package com.zxct.yzbg;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import org.apache.cordova.DroidGap;

import com.zxct.yzbg.service.NotifyService;


public class MainActivity extends DroidGap {
	private Handler handler = new Handler(); 
	private Intent intent;
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		 //super.loadUrl("file:///android_asset/www/index.html");
	 	handler.post(new Runnable() {
	 		 @Override
		      public void run() {
		    		intent = new Intent("com.zxct.yzbg.service.NotifyService");      		
		    		startService(intent);
		      }
	 		
	 	});//Á¢¼´µ÷ÓÃ
	 	
	 	
//			  new Thread(new Runnable(){
//		      @Override
//		      public void run() {
//		    	
//		    		
//		    		intent = new Intent("com.zxct.yzbg.service.NotifyService");  
//		    		
//		    		startService(intent);
//		      }
//		  }).start();
			


		
		super.loadUrl("file:///android_asset/www/index.html",15000);	
		
	}

}
