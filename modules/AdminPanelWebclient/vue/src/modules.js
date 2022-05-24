export default {
  async getModules () {
    return [
      await import('src/manager'),
      await import('src/../../../BrandingWebclient/vue/manager'),
      await import('src/../../../CoreWebclient/vue/manager'),
      await import('src/../../../Dropbox/vue/manager'),
      await import('src/../../../Facebook/vue/manager'),
      await import('src/../../../FilesWebclient/vue/manager'),
      await import('src/../../../Google/vue/manager'),
      await import('src/../../../InvitationLinkWebclient/vue/manager'),
      await import('src/../../../LogsViewerWebclient/vue/manager'),
      await import('src/../../../MobileSyncWebclient/vue/manager'),
      await import('src/../../../RocketChatWebclient/vue/manager'),
      await import('src/../../../S3Filestorage/vue/manager'),
      await import('src/../../../StandardAuthWebclient/vue/manager'),
      await import('src/../../../TwoFactorAuth/vue/manager'),
    ]
  },
}
