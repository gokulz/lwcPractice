public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountData(){
        return [Select Id, Name, Industry From Account];
    }
}