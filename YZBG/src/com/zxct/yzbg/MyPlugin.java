package com.zxct.yzbg;

import java.math.BigInteger;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.nfc.NfcAdapter;
import android.nfc.Tag;
import android.telephony.TelephonyManager;

public class MyPlugin extends Plugin {

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action        The action to execute.
     * @param args          JSONArry of arguments for the plugin.
     * @param callbackId    The callback id used when calling back into JavaScript.
     * @return              A PluginResult object with a status and message.
     */
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        try {
            if (action.equals("imei")) {
                String echo = args.getString(0); 
                if (echo != null && echo.length() > 0) { 
TelephonyManager systemService = (TelephonyManager)cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);                	


return new PluginResult(PluginResult.Status.OK, systemService.getDeviceId());
                } else {
                    return new PluginResult(PluginResult.Status.ERROR);
                }
            } else if (action.equals("nfc")) {

					Tag tag=null;
					if (NfcAdapter.ACTION_TECH_DISCOVERED.equals(cordova.getActivity().getIntent().getAction())) {
						    tag = cordova.getActivity().getIntent().getParcelableExtra(NfcAdapter.EXTRA_TAG);
					}

//            	return new PluginResult(PluginResult.Status.OK, bin2hex(tag.getId()));
					return new PluginResult(PluginResult.Status.OK, "1");
            }else{
                return new PluginResult(PluginResult.Status.ERROR);
            }
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION,"error");
        }
    }
    
   
    
    static String bin2hex(byte[] data) {
	    return String.format("%0" + (data.length * 2) + "X", new BigInteger(1,data));
	}
    
    
    
    
    
    
    
}
