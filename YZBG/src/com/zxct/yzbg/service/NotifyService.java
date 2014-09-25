package com.zxct.yzbg.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.zxct.yzbg.HttpClientToServer;
import com.zxct.yzbg.MainActivity;
import com.zxct.yzbg.R;
import com.zxct.yzbg.StatusBarNotification;



import com.zxct.yzbg.XiaoXiActivity;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.util.Log;
import android.widget.Toast;



public class NotifyService extends Service {
private Handler handler = new Handler();   
private String jh=null;
private Intent intent;
private Notification n;
private NotificationManager nm;
private static final int ID = 1;
HttpClientToServer httpClientToServer;


SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");


    private Runnable task = new Runnable() {  
        public void run() {   
      	  // TODO Auto-generated method stub
            handler.postDelayed(this,10*1000);//设置延迟时间，此处是5秒
            Date date=new Date();
            //需要执行的代码
         Toast.makeText(NotifyService.this, jh+"`````````````"+df.format(date), Toast.LENGTH_LONG).show();
         

// 		
//     	SharedPreferences sharedPreferences = getSharedPreferences("jbsz_gzzt", Context.MODE_PRIVATE);
// 		//getString()第二个参数为缺省值，如果preference中不存在该key，将返回缺省值
// 		String zt = sharedPreferences.getString("switchTest", "");
//
// 	         
// 		if(zt =="true"){
//Toast.makeText(NotifyService.this, zt+"`````````````", Toast.LENGTH_LONG).show();
 			  new Thread(new Runnable(){
                  @Override
                  public void run() {
              try {
            		httpClientToServer = new HttpClientToServer();
		    		jh = httpClientToServer.doPost();
		    		
                    httpClientToServer = new HttpClientToServer();
                  	JSONArray jsonArray = httpClientToServer.doPostParams(jh);
                  
                  	if(jsonArray.length() !=0){
                  		
                  		JSONObject jsonObj;
                      	jsonObj = (JSONObject) jsonArray.get(0);
                      	
                      		 String title =jsonObj.getString("instdesc");
	        				String body =jsonObj.getString("sendusername")+"----"+jsonObj.getString("createtime");
		
//       				
////	        				Intent intent = new Intent("com.zxct.yzbg.XiaoXiActivity");  
////	                		intent.putExtra("title",title);
////	                		startService(intent);
////	        				
//	                		
//	                		  Intent intent=new Intent(); 
//	                          //设置传递的参数 
//	                		  intent.putExtra("title",title); 
//	                          //从Activity IntentTest跳转到Activity IntentTest01 
//	                          intent.setClass(NotifyService.this,XiaoXiActivity.class); 
//	                          //启动intent的Activity 
//	                          startActivity(intent); 
////	        				StatusBarNotification s = new StatusBarNotification();
////	                  		s.showNotification(title, body);
	        				
	        				String service = NOTIFICATION_SERVICE;
	                		nm = (NotificationManager)getSystemService(service);
	                		n = new Notification();
	                		int icon =  n.icon = R.drawable.notification;
	                		String tickerText = title+"title";
	                		long when = System.currentTimeMillis();
	                		n.icon = icon;
	                		n.tickerText = tickerText;
	                		n.defaults |= Notification.DEFAULT_ALL;
	                		n.when = when;
	                		
	                		
	                		Intent intent  = new Intent(NotifyService.this,XiaoXiActivity.class);
	                		intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK); 
	                		
	                		PendingIntent pi = PendingIntent.getActivity(NotifyService.this, 0, intent, 0);
	                		n.setLatestEventInfo(NotifyService.this,title, body, pi);
	        		        n.defaults |= Notification.DEFAULT_SOUND; 
	        		        n.flags=Notification.FLAG_AUTO_CANCEL;//点击后消除
	                		nm.notify(ID,n);
	                		
	                		
	                		String guid =jsonObj.getString("guid");
	                      	
	                      	httpClientToServer.updateData(guid);
	                      	
	                        
	                       

                  	}
                		                		
              	} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}  			
       }
                  
              }).start();
 			
 			
 			
 			
 			
 			
 //		}//if(zt =="true")	
         
       

        } //public void run  
    };
    
    

	@Override
	public IBinder onBind(Intent arg0) {
		return null;
	}


    @Override  
    public void onCreate() {  
    	 System.out.println("service onCreate");
    	 System.out.println("--------------------onCreate");
    }  
  
    @Override  
    public void onDestroy() {  
    	System.out.println("-------------------onDestroy");
    }  
  
    @Override  
    public void onStart(Intent intent, int startId) {  
    	
    	System.out.println("-----------------onStart");
    }  
  
   
    public int onStartCommand(Intent intent, int flags, int startId) { 
    	
     	 System.out.println("service onStartCommand");
		    	if(intent != null){	
		   	handler.post(task);//立即调用
		    
		
		
		}    	
    	return START_REDELIVER_INTENT; 
    	}
  
   
    
	
	
	
}
