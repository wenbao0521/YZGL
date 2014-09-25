package com.zxct.yzbg;

import java.math.BigInteger;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.content.Intent;
import android.nfc.NfcAdapter;
import android.nfc.Tag;
import android.telephony.TelephonyManager;

public class JBSZPlugin  extends Plugin {

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action        The action to execute.
     * @param args          JSONArry of arguments for the plugin.
     * @param callbackId    The callback id used when calling back into JavaScript.
     * @return              A PluginResult object with a status and message.
     */
    public PluginResult execute(String action, JSONArray args, String callbackId) {
    	Intent intent = new Intent(cordova.getActivity(), JBSZActivity.class);  
        cordova.startActivityForResult((Plugin) this,intent, 200);  
        cordova.getActivity().startActivityForResult(intent,200);    
    	return null;
        
    	
    	
    	
    }
    
   
  
    
    
}
