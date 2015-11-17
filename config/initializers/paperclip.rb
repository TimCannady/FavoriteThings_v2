Paperclip::Attachment.default_options.merge!(
  storage: :s3,
  s3_credentials: {
    bucket:             Rails.application.secrets.aws['s3_bucket_name'],
    access_key_id:      Rails.application.secrets.aws['access_key_id'],
    secret_access_key:  Rails.application.secrets.aws['secret_access_key']
  },
)
