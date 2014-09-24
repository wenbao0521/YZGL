package com.zxct.yzbg;

import android.content.Intent;
import android.os.Bundle;

import org.apache.cordova.DroidGap;


public class MainActivity extends DroidGap {
	private String jh=null;
	private String guid=null;
	HttpClientToServer httpClientToServer;
	private Intent intent;
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		 //super.loadUrl("file:///android_asset/www/index.html");
		
		
		
		
		  new Thread(new Runnable(){
      @Override
      public void run() {
    		httpClientToServer = new HttpClientToServer();
    		jh = httpClientToServer.doPost();
    		
    		intent = new Intent("com.zxct.yzbg.service.NotifyService");  
    		intent.putExtra("jh",jh);
    		startService(intent);
      }
  }).start();
		  
		  
		super.loadUrl("file:///android_asset/www/workflow/SPIndex.html");	
		
	}

}
