package com.zxct.yzbg.service;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

public class BroadcastReceiverService extends BroadcastReceiver {  
	//重写onReceive方法  
    @Override  
    public void onReceive(Context context, Intent intent) {  
    	context.startService(new Intent("com.zxct.yzbg.service.NotifyService")); // 调用 Service 
    	
    }

	
  
}  